from invoke import run, task
import subprocess
import os


@task
def git():
    run("git reset --hard HEAD")
    run("git pull")

@task
def collectstatic():
    run("python3.4 manage.py collectstatic")

@task
def restartserver():
    run("../apache2/bin/restart")

@task
def pull():
    git()
    collectstatic()
    restartserver()

@task
def deploy():
    run("git add -A .")
    print("Input commit message.")
    msg = input()
    run("git commit -am {}".format(msg))
    process = subprocess.Popen("ssh socialcomm@socialcomm.webfactional.com cd ~/webapps/hec/social_commerce_project/", shell=True,
                                   stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    output,stderr = process.communicate()
    status = process.poll()
    print(output)

