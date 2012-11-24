/*
 * GET users listing.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'All Tips' });
}

exports.tip = function(req, res) {
  res.render('tip', { 
    title: 'Gummy Bear',
    index: 1,
    contributed_by: 'Ross Johnson',
    date: (new Date()).toDateString(),
    content: "To save indentation and be concise, you can use the <code>return</code> statement when calling Node.js callbacks.<br><br>Instead of<pre>if(err) { cb(err); return };</pre> you can use<pre>if(err) return cb(err);</pre>"});
}
