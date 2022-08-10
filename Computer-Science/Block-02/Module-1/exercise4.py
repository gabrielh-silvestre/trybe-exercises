from datetime import datetime
from abc import ABC, abstractmethod


class LogManipulator(ABC):

    @classmethod
    @abstractmethod
    def log(self, message):
        raise NotImplementedError


class FileLog(LogManipulator):
    @classmethod
    def log(self, message):
        with open('log.txt', 'a') as file:
            print(message, file=file)


class ScreenLog(LogManipulator):
    @classmethod
    def log(self, message):
        print(message)


class Log:
    def __init__(self) -> None:
        self.__manipulators: LogManipulator = []

    def add_manipulator(self, newManipulator: LogManipulator) -> None:
        self.__manipulators.append(newManipulator)

    def info(self, log):
        message = self.__formatter(log=log, level="INFO")
        self.__log(message)

    def alert(self, log):
        message = self.__formatter(log=log, level="ALERT")
        self.__log(message)

    def error(self, log):
        message = self.__formatter(log=log, level="ERROR")
        self.__log(message)

    def debug(self, log):
        message = self.__formatter(log=log, level="DEBUG")
        self.__log(message)

    def __log(self, message: str) -> None:
        for manipulator in self.__manipulators:
            manipulator.log(message)

    def __formatter(self, *, log, level: str) -> str:
        return f"[{level} - {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}]: {log}"
