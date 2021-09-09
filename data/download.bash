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

# get_matrix Bai bfwb62

# get_matrix ATandT pre2

# get_matrix GHS_psdef inline_1
# mv inline_1.mtx inline1.mtx

# get_matrix VanVelzen Zd_Jac3
# mv Zd_Jac3.mtx zdjac3.mtx

# get_matrix Goodwin Goodwin_095
# mv Goodwin_095.mtx goodwin095.mtx

# get_matrix UTEP Dubcova3
# mv Dubcova3.mtx dubcova3.mtx

# get_matrix Ronis xenon2

get_matrix Williams mac_econ_fwd500
mv mac_econ_fwd500.mtx maceconfwd500.mtx
