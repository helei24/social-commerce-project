#!/usr/bin/python2.7

import os


def main():
    if not os.environ.get('DJANGO_SETTINGS_MODULE'):
        print("DJANGO_SETTINGS_MODULE not set")
        os.environ['DJANGO_SETTINGS_MODULE'] = '\
        social_commerce_project.prod_settings'
        

if __name__ == "__main__":
    main()
