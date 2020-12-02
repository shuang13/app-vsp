<template>
    <div class="dagre-graph-container">
        <textarea id="inputGraph" rows="5" style="display: block" @keyup="tryDraw">
/* Example */
digraph {
    node [rx=5 ry=5 labelStyle="font: 300 14px 'Helvetica Neue', Helvetica"]
    edge [labelStyle="font: 300 14px 'Helvetica Neue', Helvetica"]
    A;
    C;
    E;
    A -&gt; B -&gt; C;
    B -&gt; D;
    D -&gt; E;
    C -&gt; E;
    A -&gt; D;
}
  </textarea>

        <svg width=1400 height=400 class="dagre">
            <g class="container"></g>
        </svg>
    </div>
</template>
<script src="https://d3js.org/d3.v4.js"></script>

<script>
    import * as d3 from 'd3'
    import dagreD3 from 'dagre-d3'
    import d3Selection from 'd3-selection'
    import graphlibDot from 'graphlib-dot'

    export default {
        name: 'DagreGraph',
        props: ['nodes', 'edges'],
        data () {
            return {
                
            }
        },
        created() {
            
        },
        methods: {
            
            tryDraw() {
                var inputGraph = document.querySelector("#inputGraph")
                var oldInputGraphValue
                var graphRE = /[?&]graph=([^&]+)/
                var graphMatch = window.location.search.match(graphRE)
                if (graphMatch) {
                  inputGraph.value = decodeURIComponent(graphMatch[1])
                }
                var debugAlignmentRE = /[?&]alignment=([^&]+)/;
                var debugAlignmentMatch = window.location.search.match(debugAlignmentRE)
                var debugAlignment
                if (debugAlignmentMatch) debugAlignment = debugAlignmentMatch[1]
                
                var svg = d3.select("svg"),
                    inner = d3.select("svg g")

                var zoom = d3.zoom().on("zoom", ()=>{
                    inner.attr("transform", d3.zoomTransform(svg.node()))

                })
                svg.call(zoom)
                var render = dagreD3.render()
                
                var g
                if (oldInputGraphValue !== inputGraph.value) {
                    inputGraph.setAttribute("class", "")
                    oldInputGraphValue = inputGraph.value
                try {
                    g = graphlibDot.read(inputGraph.value)
                } catch (e) {
                    inputGraph.setAttribute("class", "error");
                    throw e
                }
            
            
                if (!g.graph().hasOwnProperty("marginx") &&
                    !g.graph().hasOwnProperty("marginy")) {
                  g.graph().marginx = 20
                  g.graph().marginy = 20
                }
                g.graph().rankdir = "LR"
                g.graph().transition = function(selection) {
                  return selection.transition().duration(500)
                };
                
                d3.select("svg g").call(render, g)
              }
            }
        },
        mounted () {
            this.tryDraw();
        }
    }
</script>
<style>
svg {
  border: 1px solid #999;
  overflow: hidden;
}

.node {
  white-space: nowrap;
}

.node rect,
.node circle,
.node ellipse {
  stroke: #333;
  fill: #fff;
  stroke-width: 1.5px;
}

.cluster rect {
  stroke: #333;
  fill: #000;
  fill-opacity: 0.1;
  stroke-width: 1.5px;
}

.edgePath .path{
  stroke: #333;
  stroke-width: 1.5px;
  fill: none;
}
h1, h2 {
  color: #333;
}

textarea {
  width: 1400px;
  height: 300px;
}

label {
  margin-top: 1em;
  display: block;
}

.error {
  color: red;
}
</style>