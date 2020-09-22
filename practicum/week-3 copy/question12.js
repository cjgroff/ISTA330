/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
    X: 0 Y: 0
    X: 0 Y: 1 N

*/

var isCrossing = function(s) {
    Dadj = {"N":[0,1],"E":[1,0],"W":[-1,0],"S":[0,-1]}
    Visited = {"0,0":true}
    let X = 0
    let Y = 0
    
    for (let i = 0 ; i <s.length;i++)
    {
        let adj = Dadj[s[i]]
        X += adj[0]
        Y += adj[1]
        pos = `${X},${Y}`
        if(Visited[pos] == true) // we have been here before
        {
            return true
        }
        else
        {
            Visited[pos] = true
        }
        console.log(Visited)
    }
    return false
};