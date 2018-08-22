/**
 * scenes.js
 *
 * Copyright (C) 2018 Kano Computing Ltd.
 * License: http://www.gnu.org/licenses/gpl-2.0.txt GNU GPLv2
 *
 * Data about available scenes.
 */


/* jshint undef: true, unused: false */


var Tactile = {
    Animation: {
        AsciiAnimation: {
            name: 'Animation/ascii_animation.qml',
            signals: {
                finished_playing: 'finished_playing',
            }
        },
    },
    Audio: {
        PlaySound: {
            name: 'Audio/play_sound.qml',
            signals: {
                finished_playing: 'finished_playing',
                finished_writing: 'finished_writing',
                response: 'response'
            }
        },
        TroubleshootAudio: {
            name: 'Audio/troubleshoot_audio.qml',
            signals: {
                finished_playing: 'finished_playing',
                finished_writing: 'finished_writing',
                response: 'response'
            }
        },
        VisualiseMicrophone: {
            name: 'Audio/visualise_microphone.qml',
            signals: {
                response: 'response',
                finishedSetup: 'finishedSetup'
            }
        }
    },
    Mouse: {
        Click: {
            name: 'Mouse/click.qml',
            signals: {
                target_hit: 'target_hit'
            }
        },
        DragAndDrop: {
            name: 'Mouse/drag_and_drop.qml',
            signals: {
                blocks_connected: 'blocks_connected',
                finished_playing: 'finished_playing',
                finished_writing: 'finished_writing',
                response: 'response',
                wait_over: 'wait_over'
            }
        },
        Hover: {
            name: 'Mouse/hover.qml',
            signals: {
                target_hit: 'target_hit'
            }
        }
    },
    Touch: {
        TouchScreenScene: {
            name: 'Touch/touch_screen_scene.qml',
            signals: {
                response: 'response'
            }
        }
    },
    Terminal: {
        Terminal: {
            name: 'Terminal/terminal.qml',
            signals: {
                response: 'response',
                finished_writing: 'finished_writing'
            }
        }
    },
    Overscan: {
        Overscan: {
            name: 'Overscan/overscan.qml',
            signals: {
                overscan_set: 'overscan_set'
            }
        }
    },
    Matrix: {
        Animate: {
            name: 'Matrix/matrix.qml',
            signals: {
                done: 'done'
            }
        }
    },
    Sleep: {
        signals: {
            wait_over: 'timer.wait_over'
        }
    }
};
