class GumroadApiSyncJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Use the GumroadApiService to sync data
    service = GumroadApiService.new
    service.sync_products
    service.sync_categories
    # handle any other synchronization logic
  end
end
