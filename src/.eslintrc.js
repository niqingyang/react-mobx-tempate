module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    globals: {
        REACT_APP_ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true, // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
        page: true,
    },
    rules: {
        /**
         * off 或 0：表示不验证规则。
         * warn 或 1：表示验证规则，当不满足时，给警告
         * error 或 2 ：表示验证规则，不满足时报错
         */

        //////////////
        // 代码风格及规范限制.相关 //
        //////////////
        "quotes": [2, "single", {"allowTemplateLiterals": true}], // 单引号
        "no-console": 0,         // 不禁用console
        "no-debugger": 2,        // 禁用debugger
        "semi": 0,               // 不强制使用分号
        "no-control-regex": 2,   //  禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
        "linebreak-style": 0, //  禁用强制使用一致的换行风格
        "indent": ["error", 4, {"SwitchCase": 1}], // 空格4个
        "array-bracket-spacing": [2, 'never'], //  指定数组的元素之间要以空格隔开(,后面)
        "brace-style": [2, '1tbs', {'allowSingleLine': true}],  // if while function 后面的{必须与if在同一行，java风格。
        "no-irregular-whitespace": 0, // 不规则的空白不允许
        "no-trailing-spaces": 1, // 一行结束后面有空格就发出警告
        "eol-last": 0, // 文件以单一的换行符结束
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}], // 不能有声明后未被使用的变量或参数
        "no-underscore-dangle": 0, // 标识符不能以_开头或结尾
        "no-alert": 2, // 禁止使用alert confirm prompt
        "no-lone-blocks": 0, // 禁止不必要的嵌套块
        "no-class-assign": 2, // 禁止给类赋值
        "no-floating-decimal": 2,  //  禁止数字字面量中使用前导和末尾小数点
        "no-loop-func": 1,    //  禁止在循环中出现 function 声明和表达式
        "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
        "no-delete-var": 2, // 不能对var声明的变量使用delete操作符
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-dupe-args": 2, // 函数参数不能重复
        "no-empty": 2, // 块语句中的内容不能为空
        "no-func-assign": 2, // 禁止重复的函数声明
        "no-invalid-this": 0, // 禁止无效的this，只能用在构造器，类，对象字面量
        "no-redeclare": 2, // 禁止重复声明变量
        "no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
        "no-undef": 1, // 不能有未定义的变量
        "no-use-before-define": 0, // 未定义前不能使用
        "camelcase": 0, // 强制驼峰法命名
        'import/prefer-default-export': 0,
        'import/no-unresolved': [2, {ignore: ['^@/']}],
        'import/no-extraneous-dependencies': 0,
        // 'import/no-cycle': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-autofocus': 0,
        // label 必须有 for
        'jsx-a11y/label-has-for': 0,
        'no-param-reassign': 0,
        'no-else-return': 0,
        'prefer-destructuring': 0,
        'prefer-rest-params': 0,
        'global-require': 0,
        'compat/compat': 0,


        //////////////
        // React.相关 //
        //////////////
        "jsx-quotes": [2, "prefer-double"], // 强制在JSX属性（jsx-quotes）中一致使用双引号
        'react/button-has-type': 0,
        'react/no-find-dom-node': 0,
        "react/display-name": 0, // 防止在React组件定义中丢失displayName
        "react/forbid-prop-types": [2, {"forbid": ["any"]}], // 禁止某些propTypes
        "react/jsx-boolean-value": 2, // 在JSX中强制布尔属性符号
        "react/jsx-closing-bracket-location": 1, // 在JSX中验证右括号位置
        "react/jsx-curly-spacing": [2, {"when": "never", "children": true}], // 在JSX属性和表达式中加强或禁止大括号内的空格。
        "react/jsx-indent-props": [2, 4], // 验证JSX中的props缩进
        "react/jsx-key": 2, // 在数组或迭代器中验证JSX具有key属性
        "react/jsx-no-bind": 0, // JSX中不允许使用箭头函数和bind
        "react/jsx-no-duplicate-props": 2, // 防止在JSX中重复的props
        "react/jsx-no-literals": 0, // 防止使用未包装的JSX字符串
        "react/jsx-no-undef": 1, // 在JSX中禁止未声明的变量
        "react/jsx-pascal-case": 0, // 为用户定义的JSX组件强制使用PascalCase
        "react/jsx-uses-react": 1, // 防止反应被错误地标记为未使用
        "react/jsx-uses-vars": 2, // 防止在JSX中使用的变量被错误地标记为未使用
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-indent': 0,
        'react/jsx-tag-spacing': 0,
        'react/jsx-filename-extension': [1, {extensions: ['.js']}],
        'react/jsx-wrap-multilines': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/style-prop-object': 0, // 强制style使用属性对象
        'react/prefer-stateless-function': 0,
        'react/destructuring-assignment': 0,
        'react/no-unused-state': 0,
        "react/no-danger": 0, // 防止使用危险的JSX属性
        "react/no-did-mount-set-state": 0, // 防止在componentDidMount中使用setState
        "react/no-did-update-set-state": 1, // 防止在componentDidUpdate中使用setState
        "react/no-direct-mutation-state": 2, // 防止this.state的直接变异
        "react/no-multi-comp": 1, // 防止每个文件有多个组件定义
        "react/no-set-state": 0, // 防止使用setState
        "react/no-unknown-property": 2, // 防止使用未知的DOM属性
        "react/prefer-es6-class": 2, // 为React组件强制执行ES5或ES6类
        "react/prop-types": 0, // 防止在React组件定义中丢失props验证
        "react/react-in-jsx-scope": 2, // 使用JSX时防止丢失React
        "react/self-closing-comp": 0, // 防止没有children的组件的额外结束标签
        "react/sort-comp": 1, // 强制组件方法顺序
        "no-extra-boolean-cast": 0, // 禁止不必要的bool转换
        "react/no-array-index-key": 0, // 防止在数组中遍历中使用数组key做索引
        "react/no-deprecated": 1, // 不使用弃用的方法
        "react/jsx-equals-spacing": 2, // 在JSX属性中强制或禁止等号周围的空格
        "no-unreachable": 1, // 不能有无法执行的代码
        "comma-dangle": 0, // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
        "comma-spacing": [2, {'before': false, 'after': true}],  // 控制逗号前后的空格
        "no-mixed-spaces-and-tabs": 0, // 禁止混用tab和空格
        "prefer-arrow-callback": 0, // 比较喜欢箭头回调


        //////////////
        // ES6.相关 //
        //////////////
        "arrow-body-style": 0,  // 要求箭头函数体使用大括号
        "no-array-constructor": 2,// 禁止使用数组构造器
        "no-bitwise": 0,// 禁止使用按位运算符
        "no-caller": 1,// 禁止使用arguments.caller或arguments.callee
        "no-catch-shadow": 2,// 禁止catch子句参数与外部作用域变量同名
        "no-const-assign": 2,// 禁止修改const声明的变量
        "no-constant-condition": 2,// 禁止在条件中使用常量表达式 if(true) if(1)
        "no-continue": 0,// 禁止使用continue
        "no-div-regex": 1,// 不能使用看起来像除法的正则表达式/=foo/
        "no-empty-character-class": 2,// 正则表达式中的[]内容不能为空
        "no-empty-label": 0,// 禁止使用空label
        "no-eq-null": 2,// 禁止对null使用==或!=运算符
        "no-eval": 1,// 禁止使用eval
        "no-ex-assign": 2,// 禁止给catch语句中的异常参数赋值
        "no-extend-native": 2,// 禁止扩展native对象
        "no-extra-bind": 2,// 禁止不必要的函数绑定
        "no-extra-parens": 2,// 禁止非必要的括号
        "no-extra-semi": 2,// 禁止多余的冒号
        "no-fallthrough": 1,// 禁止switch穿透
        "no-implicit-coercion": 1,// 禁止隐式转换
        "no-implied-eval": 2,// 禁止使用隐式eval
        "no-inline-comments": 0,// 禁止行内备注
        "no-inner-declarations": [2, "functions"],// 禁止在块语句中使用声明（变量或函数）
        "no-invalid-regexp": 2,// 禁止无效的正则表达式
        "no-iterator": 2,// 禁止使用__iterator__ 属性
        "no-label-var": 2,// label名不能与var声明的变量名相同
        "no-labels": 2,// 禁止标签声明
        "no-lonely-if": 2,// 禁止else语句内只有if语句
        "no-mixed-requires": [0, false],// 声明时不能混用声明类型
        "no-multi-spaces": 1,// 不能用多余的空格
        "no-multi-str": 2,// 字符串不能用\换行
        "no-multiple-empty-lines": [1, {"max": 2}],// 空行最多不能超过2行
        "no-native-reassign": 2,// 不能重写native对象
        "no-negated-in-lhs": 2,// in 操作符的左边不能有!
        "no-nested-ternary": 0,// 禁止使用嵌套的三目运算
        "no-new": 1,// 禁止在使用new构造一个实例后不赋值
        "no-new-func": 1,// 禁止使用new Function
        "no-new-object": 2,// 禁止使用new Object()
        "no-new-require": 2,// 禁止使用new require
        "no-new-wrappers": 2,// 禁止使用new创建包装实例，new String new Boolean new Number
        "no-obj-calls": 2,// 不能调用内置的全局对象，比如Math() JSON()
        "no-octal": 2,// 禁止使用八进制数字
        "no-octal-escape": 2,// 禁止使用八进制转义序列
        "no-path-concat": 0,// node中不能使用__dirname或__filename做路径拼接
        "no-plusplus": 0,// 禁止使用++，--
        "no-process-env": 0,// 禁止使用process.env
        "no-process-exit": 0,// 禁止使用process.exit()
        "no-proto": 2,// 禁止使用__proto__属性
        "no-regex-spaces": 2,// 禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-restricted-modules": 0,// 如果禁用了指定模块，使用就会报错
        "no-return-assign": 1,// return 语句中不能有赋值表达式
        "no-script-url": 0,// 禁止使用javascript:void(0)
        "no-self-compare": 2,// 不能比较自身
        "no-sequences": 0,// 禁止使用逗号运算符
        "no-shadow": 2,// 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-shadow-restricted-names": 2,// 严格模式中规定的限制标识符不能作为声明时的变量名使用
        "no-sparse-arrays": 2,// 禁止稀疏数组， [1,,2]
        "no-sync": 0,// nodejs 禁止同步方法
        "no-ternary": 0,// 禁止使用三目运算符
        "no-this-before-super": 0,// 在调用super()之前不能使用this或super
        "no-throw-literal": 2,// 禁止抛出字面量错误 throw "error";
        "no-undef-init": 2,// 变量初始化时不能直接给它赋值为undefined
        "no-undefined": 0,// 不能使用undefined
        "no-unexpected-multiline": 2,// 避免多行表达式
        "no-unneeded-ternary": 2,// 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        "no-unused-expressions": 2,// 禁止无用的表达式
        "no-useless-call": 2,// 禁止不必要的call和apply
        "no-void": 2,// 禁用void操作符
        "no-var": 0,// 禁用var，用let和const代替
        "no-warning-comments": [1, {"terms": ["todo", "fixme", "xxx"], "location": "start"}],// 不能有警告备注
        "no-with": 2,// 禁用with
        "arrow-parens": 0,// 箭头函数用小括号括起来
        "arrow-spacing": 0,// =>的前/后括号


        //////////////
        //    其他   //
        //////////////
        "accessor-pairs": 0,// 在对象中使用getter/setter
        "block-scoped-var": 0,// 块语句中使用var
        "callback-return": 1,// 避免多次调用回调什么的
        "comma-style": [2, "last"],// 逗号风格，换行时在行首还是行尾
        "complexity": [0, 11],// 循环复杂度
        "computed-property-spacing": [0, "never"],// 是否允许计算后的键名什么的
        "consistent-return": 0,// return 后面是否允许省略
        "consistent-this": [2, "that"],// this别名
        "constructor-super": 0,// 非派生类不能调用super，派生类必须调用super
        "curly": [2, "all"],// 必须使用 if(){} 中的{}
        "default-case": 2,// switch语句最后必须有default
        "dot-location": 0,// 对象访问符的位置，换行的时候在行首还是行尾
        "dot-notation": [0, {"allowKeywords": true}],// 避免不必要的方括号
        "eqeqeq": 2,// 必须使用全等
        "func-names": 0,// 函数表达式必须有名字
        "func-style": [0, "declaration"],// 函数风格，规定只能使用函数声明/函数表达式
        "generator-star-spacing": 0,// 生成器函数*的前后空格
        "guard-for-in": 0,// for in循环要用if语句过滤
        "handle-callback-err": 0,// nodejs 处理错误
        "id-length": 0,// 变量名长度
        "init-declarations": 0,// 声明时必须赋初值
        "key-spacing": [0, {"beforeColon": false, "afterColon": true}],// 对象字面量中冒号的前后空格
        "lines-around-comment": 0,// 行前/行后备注
        "max-depth": [0, 4],// 嵌套块深度
        "max-len": [0, 80, 4],// 字符串最大长度
        "max-nested-callbacks": [0, 2],// 回调嵌套深度
        "max-params": [0, 3],// 函数最多只能有3个参数
        "max-statements": [0, 10],// 函数内最多有几个声明
        "new-cap": 2,// 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "new-parens": 2,// new时必须加小括号
        "newline-after-var": 0,// 变量声明后是否需要空一行
        "object-curly-spacing": [0, "never"],// 大括号内是否允许不必要的空格
        "object-shorthand": 0,// 强制对象字面量缩写语法
        "one-var": 1,// 连续声明
        "operator-assignment": [0, "always"],// 赋值运算符 += -=什么的
        "operator-linebreak": [2, "after"],// 换行时运算符在行尾还是行首
        "padded-blocks": 0,// 块语句内行首行尾是否要空行
        "prefer-const": 0,// 首选const
        "prefer-spread": 0,// 首选展开运算
        "prefer-reflect": 0,// 首选Reflect的方法
        "quote-props": [2, "as-needed"],// 对象字面量中的属性名是否强制双引号
        "radix": 2,// parseInt必须指定第二个参数
        "id-match": 0,// 命名检测
        "require-yield": 0,// 生成器函数必须有yield
        "semi-spacing": [0, {"before": false, "after": true}],// 分号前后空格
        "sort-vars": 0,// 变量声明时排序
        "space-after-keywords": [0, "always"],// 关键字后面是否要空一格
        "space-before-blocks": [0, "always"],// 不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [0, "always"],// 函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"],// 小括号里面要不要有空格
        "space-infix-ops": 0,// 中缀操作符周围要不要有空格
        "space-return-throw-case": 0,// return throw case后面要不要加空格
        "space-unary-ops": [0, {"words": true, "nonwords": false}],// 一元运算符的前/后要不要加空格
        "spaced-comment": 0,// 注释风格不要有空格什么的
        "strict": 2,// 使用严格模式
        "use-isnan": 2,// 禁止比较时使用NaN，只能用isNaN()
        "valid-jsdoc": 0,// jsdoc规则
        "valid-typeof": 2,// 必须使用合法的typeof的值
        "vars-on-top": 2,// var必须放在作用域顶部
        "wrap-iife": [2, "inside"],// 立即执行函数表达式的小括号风格
        "wrap-regex": 0,// 正则表达式字面量用小括号包起来
        "yoda": [2, "never"]// 禁止尤达条件
    },
    settings: {
        polyfills: ['fetch', 'promises', 'url', 'object-assign'],
        "import/ignore": [
            "node_modules"
        ]
    },
};
