#!/bin/bash

set -e

get_matrix() {
  GROUP=$1
  NAME=$2
  wget https://suitesparse-collection-website.herokuapp.com/MM/$GROUP/$NAME.tar.gz
  tar xzf $NAME.tar.gz
  mv $NAME/$NAME.mtx .
  rm -rf $NAME
  rm $NAME.tar.gz
}

get_matrix Bai bfwb62
get_matrix GHS_psdef inline_1
get_matrix ATandT pre2

mv inline_1.mtx inline1.mtx
