from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail

from .forms import SignUpForm, ContactForm, SearchForm
from .models import SignUp, Search

from crawl import spider
import pprint
pretty = pprint.PrettyPrinter(depth=6)

def pp(target):
    pretty.pprint(target)

# Create your views here.
def home(request):
    title = 'Welcome'
    form = SignUpForm(request.POST or None)
    search_form = SearchForm(request.POST or None)
    context = {
        'title' : title,
        'form'  : form,
        'search_form' : search_form
    }
    if request.method == 'POST':
        print request.POST

    if search_form.is_valid():
        search_instance = search_form.save(commit=False)
        print('search executed')
        url_req = 'http://' + 'hello' + '.com'
        search_res = spider(url_req, 'sale', 20)
        context['search_result'] = search_res
    else:
        print('MISSING SOMETHING')

    if form.is_valid():
        # form.save() # "quick" save
        # print request.POST['email'] # not recommended unless experienced
        instance = form.save(commit=False)

        full_name = form.cleaned_data.get('full_name')
        if not full_name:
            full_name = 'New Full Name'
        instance.full_name = full_name
        # if not instance.full_name:
        #     instance.full_name = 'Ali'
        instance.save()
        context = {
            'title' : 'Thank you, %s' % (instance.full_name)
        }

    if request.user.is_authenticated() and request.user.is_staff:
        # print(SignUp.objects.all())
        # i = 1
        # for instance in SignUp.objects.all():
        #     print(str(i) + ' : ' + str(instance.full_name))
        #     i += 1
        queryset = SignUp.objects.all().order_by('-timestamp')
        context = {
            'queryset' : queryset,
        }

    return render(request, 'home.html', context)

def contact(request):
    title = 'Contact Us'
    text_align_center = True
    form = ContactForm(request.POST or None)
    if form.is_valid():
        # for key, value in form.cleaned_data.iteritems():
        #     print key, ':', value
        form_email = form.cleaned_data.get('email')
        form_message = form.cleaned_data.get('message')
        form_full_name = form.cleaned_data.get('full_name')

        subject = 'Site contact form '
        from_email = settings.EMAIL_HOST_USER
        to_email = [from_email, 'youotheremail@gmail.com']
        contact_message = "%s: %s via %s" % (
            form_full_name,
            form_message,
            form_email
        )

        send_mail(
            subject,
            contact_message,
            from_email,
            [to_email],
            fail_silently=True
        )

    context = {
        'form' : form,
        'title': title,
        'text_align_center' : text_align_center,
    }


    return render(request, 'forms.html', context)

def search(request):
    if request.method == 'POST':
        search_text = request.POST['search_text']
    else:
        search_text = ''

    signups = SignUp.objects.filter(full_name__contains=search_text)

    return render(request, 'home.html', {'SignUps' : signups})
