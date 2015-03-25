from invoke import run, task


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
