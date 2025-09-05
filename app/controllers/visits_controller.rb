# app/controllers/visits_controller.rb
class VisitsController < ApplicationController
  protect_from_forgery with: :null_session

  def hit
    key   = "visits:all"
    value = (Rails.cache.read(key).to_i) + 1
    Rails.cache.write(key, value)
    render json: { value: value }
  end
end
