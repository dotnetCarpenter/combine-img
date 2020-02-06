#!/usr/bin/env bash

# TYPE=$1
# FILES=:"ls *.$TYPE"

# declare -a INPUT=($FILES)

declare -a INPUT
mapfile -d " " $INPUT

echo $INPUT[0]

# convert +append file1 file2 outfile