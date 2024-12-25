Cleanup Tasks
[ ] Add linter
[ ] Investigate why node-pad-ipv6 is not installed in node_modules - Bug or feature?
[ ] Tools directory: create a more universal solution similar to artisan commands
[ ] Rename Mailblocker as it's too similar to Mailbroker
[ ] Fix existing tests
[ ] Rewrite bash tests to JS
[ ] Create self-diagnostic script (not open relay, ...)
GitLab Integration (Completed)
[x] Fix docker-compose.yml
[x] Reduce number of settings, implement generation:
[x] Remove API_CATCH_MTA_ALL
[x] Remove API_REPLY_MTA_REPORT_ALL
[x] Consolidate API_INCOMING_MAIL_MAX_SIZE and similar settings (SPAMASSASSIN_MAX_MSG_SIZE, EXIM_INCOMING_MAIL_MAX_SIZE)
=> INCOMING_MAIL_MAX_SIZE_KILOBYTES
[x] Generate EXIM_MAIL_USER, EXIM_MAIL_PASS, EXIM_MAIL_FROM - complex task, needs to be passed between environments.
Note: EXIM_MAIL_FROM is the FROM field, can differ from EXIM_MAIL_USER
[x] Generate SECURITY_SALT
[x] Duplicate settings from .env to GitLab variables
[x] Set up CI/CD (.gitlab-ci.yml)
[x] Handle /ssl directory containing DKIM certificates - needs CI/CD integration or alternative solution
Note: DKIM is created when EXIM starts and stored in volume
[x] /config directory - build in CI/CD
[x] Update npm packages
[x] Update documentation
[x] Rename to mailbroker
Remaining Tasks
[ ] Fix lastMtaIP functionality with ham-green-concert.eml (127.0.0.1)
[ ] Verify if Spamassassin and others wait for entire email (with headers) or just "body"
[ ] Investigate mail.ru spam rejection system for potential integration
[ ] Address Exim warning: Suggested action: either install a certificate or change tls_advertise_hosts option
[ ] Replace problematic test-letters, fix failing tests
[ ] Implement TO checking: reject invalid domains (e.g., allow a.site.com but reject b.site.com)
[ ] Add SpamAssassin rules via "SpamAssassin rules file"
[ ] Add SpamAssassin test letters from "spamassassin/t/data/dkim"
[ ] Implement translations for SpamAssassin:
- Resources:
- https://spamassassin.apache.org/full/3.0.x/dist/rules/30_text_fr.cf
- http://spamassassin.apache.org/old/tests_3_3_x.html
- http://www.sisyphus.ru/ru/srpm/BP3/spamassassin/sources/3
- http://eastoverhill.co.uk/techref/spam_assasin_test_settings.htm
[ ] Integrate free email checking service: https://identibyte.com/
[ ] Add HaveIBeenPwned integration: https://haveibeenpwned.com/API/v3
