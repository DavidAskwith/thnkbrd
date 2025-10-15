#!/bin/bash

path=$HOME/qmk_firmware/keyboards/thnkbrd

if [ ! -e "$path" ]; then
    echo "Symlinking keyboard"
    ln -s $(pwd)/thnkbrd $path
fi

qmk compile -kb thnkbrd -km default

qmk flash -kb thnkbrd -km default
