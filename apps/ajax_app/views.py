from django.shortcuts import render, redirect
from .models import Notes

# Create your views here.
def index(request):
    notes = Notes.objects.all()
    notes = {"notes": notes}
    return render(request, 'index.html', notes)

def postNote(request):
    print request.POST['noteText']
    Notes.objects.create(noteText = request.POST['noteText'])
    return redirect('/')
