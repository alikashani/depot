from django import forms

from .models import SignUp, Search

class SearchForm(forms.ModelForm):
    class Meta:
        model = Search
        fields = ['search_text']

    def clean_search_text(self):
        search_text = self.cleaned_data.get('search_text')
        # TODO -- Add in necessary validation here
        return search_text

class ContactForm(forms.Form):
    full_name = forms.CharField(required = False)
    email = forms.EmailField()
    message = forms.CharField()

class SignUpForm(forms.ModelForm):
    class Meta:
        model = SignUp
        fields = ['full_name', 'email']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        email_base, provider = email.split('@')
        domain, extension = provider.split('.')
        if not 'edu' in email:
            raise forms.ValidationError('Please use a valid .edu email address')
        return email

    def clean_full_name(self):
        full_name = self.cleaned_data.get('full_name')
        # write validation code here
        return full_name
