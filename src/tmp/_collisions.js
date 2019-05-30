/**
 * https://github.com/chrisdickinson/collide-2d-tilemap
 */

import { vec2 } from 'gl-vec2'

// we want everything to be
// integer coordinates.
vec2.create = function () {
  return new Int32Array(2)
}

function collide (box, vec, oncollision) {
  if (vec[0] === 0 && vec[1] === 0) return

  // collide x, then y
  collideaxis(0)
  collideaxis(1)

  function collideaxis (axis) {
    var posi = vec[axis] > 0

    var leading = box[posi ? 'max' : 'base'][axis]
    var dir = posi ? 1 : -1

    var opposite_axis = +!axis

    var start = Math.floor(box.base[opposite_axis] / tilesize) | 0

    var end = Math.ceil(box.max[opposite_axis] / tilesize) | 0

    var tilespace = Math.floor(leading / tilesize) | 0

    var tilespace_end = (Math.floor((leading + vec[axis]) / tilesize) | 0) + dir

    var done = false

    var edge_vector

    var edge

    var tile

    // loop from the current tile coord to the dest tile coord
    //    -> loop on the opposite axis to get the other candidates
    //      -> if `oncollision` return `true` we've hit something and
    //         should break out of the loops entirely.
    //         NB: `oncollision` is where the client gets the chance
    //         to modify the `vec` in-flight.
    // once we're done translate the box to the vec results
    for (var i = tilespace; !done && i !== tilespace_end; i += dir) {
      if (i < offset[axis] || i >= dimensions[axis]) continue
      for (var j = start; j !== end; ++j) {
        if (j < offset[opposite_axis] || j >= dimensions[opposite_axis]) continue

        coords[axis] = i
        coords[opposite_axis] = j

        tile = getTile.apply(field, coords)

        if (tile === undefined) continue

        edge = dir > 0 ? i * tilesize : (i + 1) * tilesize
        edge_vector = edge - leading

        if (oncollision(axis, tile, coords, dir, edge_vector)) {
          done = true
          break
        }
      }
    }

    coords[0] = coords[1] = 0
    coords[axis] = vec[axis]
    box.translate(coords)
  }
}
