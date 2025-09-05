class VisitsController < ApplicationController
  protect_from_forgery with: :null_session

  def hit
    key = "visits:all"                    # single, global counter
    value = (Rails.cache.read(key).to_i) + 1
    Rails.cache.write(key, value)         # no expiry; persists in cache store
    render json: { value: value }
  end
end
