# Be sure to restart your server when you modify this file.

Rails.application.config.content_security_policy do |policy|
  # Core
  policy.default_src :self
  policy.object_src  :none

  # Assets
  policy.img_src   :self, :https, :data
  policy.font_src  :self, :https, :data
  policy.style_src :self, :https, :unsafe_inline

  # Scripts (allow inline since you use inline <script>)
  policy.script_src :self, :https, :unsafe_inline

  # XHR/fetch targets (add any others you need)
  policy.connect_src :self, :https, "https://api.countapi.xyz"

  # Dev server sockets in development only
  if Rails.env.development?
    policy.connect_src :self, :https, "http://localhost:3035", "ws://localhost:3035"
  end

  # Optional: CSP report endpoint
  # policy.report_uri "/csp-violation-report-endpoint"
end

# If you prefer nonces instead of :unsafe_inline, enable:
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }
# Rails.application.config.content_security_policy_nonce_directives = %w(script-src)
