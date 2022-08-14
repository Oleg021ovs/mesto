module.exports = {
    presets:[
        [
            '@babel/preset-env',
            {
                'corejs': '3.24.1',
                'useBuiltIns': 'entry'
            }
        ]
    ]
}