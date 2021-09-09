#!/bin/bash

set -e

MATS="
    dubcova3
    goodwin095
    maceconfwd500
    zdjac3
"

for mat in $MATS; do
    echo "... $mat ..."
    dir=results/russell/$mat
    mkdir -p $dir
    OPENBLAS_NUM_THREADS=1 solve_mm data/$mat.mtx > $dir/umf_auto_omp1.json
    OPENBLAS_NUM_THREADS=1 solve_mm data/$mat.mtx -m > $dir/mmp_auto_omp1.json
    OPENBLAS_NUM_THREADS=1 solve_mm data/$mat.mtx -m -n2 > $dir/mmp_auto_omp2.json
    OPENBLAS_NUM_THREADS=1 solve_mm_deb data/$mat.mtx -m > $dir/mmpdeb_auto_omp1.json
done
