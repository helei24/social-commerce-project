from django.shortcuts import redirect
from django.http import Http404
import re


class AllauthOverrideMiddleware():
    """
    A middleware to implement a custom user flow
    """
    def __init__(self):
        # allauth urls
        self.url_social = re.compile("^/accounts/.*$")
        self.url_social_login = re.compile("^/accounts/login/.*$")

    def process_request(self, request):

        # IF ALLAUTH LOGIN URL IS REQUESTED, REDIRECT TO ROOT
        if self.url_social_login.match(request.path):
            return redirect("/")
        
        # AND CAN ONLY POST TO ALLAUTH URLS
        if request.method == "GET" and\
           self.url_social.match(request.path):
            raise Http404("Allauth urls are not accessible with GET request")
