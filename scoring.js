const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return (
        player.stats.passing.yards / 25 +
                  player.stats.passing.touchdowns * 6 +
                  player.stats.passing.interceptions * -3 +
                  player.stats.rushing.yards / 10 +
                  player.stats.rushing.touchdowns * 6 +
                  player.stats.rushing.fumbles * -3
      )
    case 'RB':
      return (
        
      )
    case 'WR':
      return (
        
      )

    case 'TE':
      return (
        
      )
    case 'K':
      return (0)
  }
}

module.exports = calculateScore
