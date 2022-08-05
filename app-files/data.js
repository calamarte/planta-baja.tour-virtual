var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2977409140334366,
          "pitch": 0.24513275180867566,
          "rotation": 0,
          "target": "1-salon_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon_1",
      "name": "SALON_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.7503140400107657,
        "pitch": 0.06210026517504019,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -1.240515694047545,
          "pitch": 0.11332758081064931,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 0.06827550084982192,
          "pitch": 0.09792441802878749,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8807559737463695,
          "pitch": 0.23459760237779115,
          "rotation": 0,
          "target": "1-salon_1"
        },
        {
          "yaw": -0.8466235950416809,
          "pitch": 0.2791329077559279,
          "rotation": 5.497787143782138,
          "target": "4-dormitorio"
        },
        {
          "yaw": 1.5404606190048247,
          "pitch": 0.2814085730300526,
          "rotation": 0,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.06184077978602076,
        "pitch": 0.18746906200760094,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -1.951717623961514,
          "pitch": 0.44180869390390853,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio",
      "name": "DORMITORIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6566810262064458,
          "pitch": 0.1672874100316264,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PLANTA BAJA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
