class FallbackController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
  end
  

# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
# I ALREADY DEPLOYED MY APP!