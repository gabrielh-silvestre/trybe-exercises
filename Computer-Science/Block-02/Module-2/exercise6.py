from abc import ABC, abstractmethod


class CalcTaxes(ABC):
    @abstractmethod
    def calc(self, price):
        raise NotImplementedError


class TaxeISS(CalcTaxes):
    def calc(self, value):
        return value * 0.1


class TaxeICMS(CalcTaxes):
    def calc(self, value):
        return value * 0.06


class Orcamento:
    def __init__(self, value):
        self.__value = value

    def calcular_imposto(self, taxe):
        return taxe.calc(self.__value)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(TaxeISS())}")
print(f"ICMS: {orcamento.calcular_imposto(TaxeICMS())}")
