FROM python:3.11-slim

WORKDIR /app

# Remove the trailing backslash from the last package
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client

RUN pip install --upgrade pip

# Add cleaning up apt cache to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN python manage.py addadmin

RUN python manage.py migrate

RUN python manage.py collectstatic --noinput
ENV PYTHONPATH=/app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]