import time
from locust import HttpUser, task, between

class QuickstartLoad(HttpUser):
  wait_time = between(1, 2.5)

  @task
  def view_todo_collection(self):
    self.client.get('/todo')

  @task(3)
  def view_todo_items(self):
    for item_id in range(10):
      self.client.get(f'/todo/{item_id}')
      time.sleep(1)

