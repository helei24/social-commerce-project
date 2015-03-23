from invoke import run, task


@task
def deploy():
    run("git add -A .")
    print("what is your commit message")
    msg = input('>')
    run("git commit -am '{}'".format(msg))
    run("git push origin master")
    run("git push webfaction master")


@task
def collectstatic():
    run("python manage.py collectstatic")
