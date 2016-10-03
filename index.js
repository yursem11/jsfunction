var a = Number(prompt('input a'));
var b = Number(prompt('input b'));
var c = Number(prompt('input c'));
/*var x1;
var x2;*/
var d = b * b - 4 * a * c;
var result = 'немає кореню';
alert(d);
var x1 = -b / ( 2 * a ) +  Math.sqrt(d)/ ( 2 * a );
var x2 = -b / ( 2 * a ) -  Math.sqrt(d)/ ( 2 * a );

if (d>0) { alert(x1);
alert(x2);
};
if (d=0) { alert(x1);
};
if (d<0) {alert(result);
}

/*function square ()
{
    if (d > 0) {
    x1 = -b / ( 2 * a ) + Math.sqrt(d) / ( 2 * a );
    x2 = -b / ( 2 * a ) - Math.sqrt(d) / ( 2 * a );
    };
        if (d = 0)
    {alert(x1);
        };
if (d<0) {result = 'рівняння немає кореня'};
    alert(result);
    }*/



    