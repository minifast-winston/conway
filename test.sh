#!/bin/sh

set -ex

test -f Gemfile
jasmine > /dev/null
rake jasmine:ci > /dev/null
which python
python -m SimpleHTTPServer &
sleep 1
curl -s http://localhost:8000/ | grep Conway || kill %1
curl -s http://localhost:8000/ | grep '<script type="text/javascript" src="public/javascripts/conway.js"></script>' || kill %1
curl -s http://localhost:8000/public/javascripts/conway.js | grep '404' && kill %1
sleep 1
kill %1
test -f spec/javascripts/conway_spec.js
test -d spec/javascripts/jasmine_examples
set "All tests passed ❤️💛💚💙💜"
