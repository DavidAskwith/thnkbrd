# Flashing

1. Reset board
    1. Unplug
    1. Hold key upper far left of left board
    1. Plugin
1. Get disk name `sudo lsblk`
1. Mount usb `sudo mount -o umask=000,users /dev/sda1 /media/usb`
1. Flash `./flash.sh`
