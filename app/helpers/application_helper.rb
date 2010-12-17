module ApplicationHelper

  # Logo helper
  def logo
    #<% logo = image_tag("logo.png", :alt => "Twitter-like App", :class => "round") %>
    image_tag("logo.png", :alt => "Twitter-like App", :class => "round")
  end
  # Return a title on a per-page basis.
  def title
    base_title = "Ruby on Rails Twitter Concept App"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
end
