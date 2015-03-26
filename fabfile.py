from fabric.api import *


env.hosts = ['socialcomm@socialcomm.webfactional.com']


def git_commit():
    local("git add -A .")
    msg = raw_input("Commit message: ")
    local("git commit -am '%s'" % msg)
    local("git push")


def pull():
    run("cd /home/socialcomm/webapps/hec/social_commerce_project/")
    run("git reset --hard HEAD")
    run("git pull")
    run("python3.4 manage.py collectstatic --noinput")
    run("../apache2/bin/restart")


def deploy():
    git_commit()
    pull()

