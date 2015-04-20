# encoding: utf-8

class Example(Dict):
    """ This is a docstring """
    class_variable = 42

    def method(self, other, parameters):
        local_variable
        global class_variable # this is an inline comment

        if True is not None:
            return False
        else:
            return /(regular|.*expression|[a-zA-Z]+literal)/

    def str(self):
        r""" Raw? """
        return "String with %s and e\sc\ap\e characters" % u"interpolation"
