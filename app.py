from flask import Flask, render_template, request, redirect
from supabase import create_client
import os


app = Flask(__name__)


SUPABASE_URL = "https://ivtrmbtejacnlwfhqbxf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dHJtYnRlamFjbmx3ZmhxYnhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDA3MjAsImV4cCI6MjA4MzcxNjcyMH0.56ORDbStww3g8odTj3Cv_SQgyUDNaOorb5FzR1wON-o"


supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        topic = request.form['topic']
        notes = request.form['notes']
        supabase.table('learning_posts').insert({
            'name': name,
            'topic': topic,
            'notes': notes
            }).execute()
        return redirect('/')
    data = supabase.table('learning_posts').select('*').order('id', desc=True).execute()
    return render_template('index.html', posts=data.data)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

