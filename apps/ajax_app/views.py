from django.shortcuts import render, redirect
from .models import Notes

# Create your views here.
def index(request):
    notes = Notes.objects.all()
    notes = {"notes": notes}
    return render(request, 'index.html', notes)

def postNote(request):
    noteObj = Notes.objects.create(noteText = request.POST['noteText'])
    noteObj = {"noteObj": noteObj}
    return render(request, 'notesPartial.html', noteObj)

def deleteNote(request, noteID):
    print noteID;
    Notes.objects.filter(id = noteID).delete()
    return redirect('/')
