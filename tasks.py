from invoke import run, task


@task
def collectstatic():
        run("python manage.py collectstatic")

@task
def bootstrap():
        collectstatic()
