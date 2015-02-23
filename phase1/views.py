from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from users.models import UserStep
from django import forms


class AgreementForm(forms.Form):
    i_agree = forms.BooleanField(label="I agree", required=True)


def agreement(request):
    """This view controls the agreement form and related user flow"""

    if "agreed" in request.session:
        del request.session["agreed"]

    # this is just used to controll access to the agreement
    if request.method == "POST":

        agreement_form = AgreementForm(request.POST)

        if agreement_form.is_valid():

            response = HttpResponseRedirect("/phase1/login/")

            # we set the session and a cookie for data persistance
            request.session["agreed"] = True

            return response

    agreement_form = AgreementForm()
    response = render(request, "phase1/agreement.djhtml",
                      {"form": agreement_form})

    return response


def login_page(request):
    """This view controls the login page"""

    # we cant access login page without first agreeing
    if "agreed" not in request.session:
        return HttpResponseRedirect('/')

    # we get the email from the session or cookie
    context_dict = {}

    return render(request, 'phase1/login_page.djhtml', context_dict)


@login_required
def step1(request):
    context_dict = {}
    UserStep.objects.setUserStep(request.user, 0, 1)
    return render(request, 'phase1/step1.djhtml', context_dict)


@login_required
def step2(request):
    UserStep.objects.setUserStep(request.user, 1, 2)
    return render(request, 'phase1/step2.djhtml')


@login_required
def step3(request):
    return render(request, 'phase1/step3.djhtml')
