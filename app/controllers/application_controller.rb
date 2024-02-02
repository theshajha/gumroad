class ApplicationController < ActionController::API
  # Protect from forgery with exception - only applicable for ActionController::Base
  # protect_from_forgery with: :exception

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from StandardError, with: :handle_standard_error

  private

  def record_not_found
    render json: { error: 'Record not found' }, status: :not_found
  end

  def handle_standard_error(exception)
    render json: { error: exception.message }, status: :internal_server_error
  end

  # Add more helper methods here that are to be used by other controllers
end