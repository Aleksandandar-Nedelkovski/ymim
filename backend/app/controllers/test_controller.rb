class TestController < ApplicationController
  def index
    render json: { events: [{ id: 1, title: 'test event'}] }
  end
end