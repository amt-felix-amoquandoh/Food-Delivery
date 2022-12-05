
function solution(commands, names, parameters) {
  const playlist = new Playlist();
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'add') {
      playlist.addTrack(names[i], parameters[i]);
    } else if (commands[i] === 'delete') {
      playlist.deleteTrack(names[i]);
    } else if (commands[i] === 'play') {
      playlist.playTrack(names[i], parameters[i]);
    } else if (commands[i] === 'reset') {
      if (names[i] === '') {
        playlist.resetTrack();
      } else {
        playlist.resetTrack(names[i]);
      }
    } else if (commands[i] === 'move') {
      playlist.moveTrack(names[i], parameters[i]);
    } else { // commands[i] === 'get'
      result.push(playlist.toString());
    }
  }

  return result;
}

