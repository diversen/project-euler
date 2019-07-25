var timer = require('./src/timer')


function pascalsTriangle () {

    /**
     * Get row from previous row
     */
    this.getRow = function (p) {
        
        // console.log(p, p.length);

        let r = [];
        r.push(1);
        for(let i = 0; i < p.length-1; i++ ) {
            let v = p[i] + p[i+1];
            // console.log(p[i], p[i+1], v);
            r.push(v);
        }
        r.push(1);
        return r;
    }

    this.getRows = function (n) {
        let res = [];
        res.push([1]);

        if (n===1) return res;

        res.push([1, 1]);

        if (n===2) return res;
        
        // Iterate rows
        for(let i = 1; i < n - 1; i++) {
            
            let r = this.getRow(res[i]);
            res.push(r);
        }

        return res;
    }
}

var p = new pascalsTriangle();
var t = p.getRows(51);
console.log(t.pop());

console.log(timer.getTime() / 1000  )
