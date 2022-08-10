class Tv:
    def __init__(self, size: int) -> None:
        self.__volume: int = 50
        self.__channel: int = 1
        self.__size: int = size
        self.__is_on: bool = False

    def __str__(self) -> str:
        properties = {
            "volume": self.__volume,
            "channel": self.__channel,
            "size": self.__size,
            "is_on": self.__is_on
        }

        return f"{properties}"

    @property
    def volume(self):
        return self.__volume

    @property
    def channel(self):
        return self.__channel

    @property
    def size(self):
        self.__size

    @property
    def is_on(self):
        return self.__is_on

    def increase_volume(self) -> None:
        if (self.__volume <= 99):
            self.__volume += 1

    def decrease_volume(self) -> None:
        if (self.__volume > 0):
            self.__volume -= 1

    def change_channel(self, new_channel: int) -> None:
        if (99 >= new_channel >= 1):
            self.__channel = new_channel

    def toggle_tv(self):
        self.__is_on = not self.__is_on
