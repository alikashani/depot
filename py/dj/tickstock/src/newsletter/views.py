from django.shortcuts import render

from .forms import SignUpForm

# Create your views here.
def home(request):
    title = 'Welcome'
    form = SignUpForm(request.POST or None)

    context = {
    'title' : title,
    'form'  : form
    }

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
            'title' : 'Thank you, %s' %(instance.full_name)
        }

    return render(request, 'home.html', context)
