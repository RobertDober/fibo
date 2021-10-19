import functools, operator

def iter_fibo(n):
    a = 1
    b = 0
    for _ in range(n):
        a, b = a+b, a
    return b

def func_fibo(n):
    return functools.reduce(
            lambda t, _: (t[0] + t[1], t[0]),
            range(n),
            (1, 0))[1]
