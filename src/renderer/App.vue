<template>
    <v-app>
        <header class="pa-4">
            <h1 class="text-right">TI-86</h1>
            <canvas class="display mb-8"></canvas>
            <div class="grid">
                <c-btn-wrapper class="text-center">
                    <c-btn-alt>M1</c-btn-alt>
                    <v-btn>F1</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper class="text-center">
                    <c-btn-alt>M2</c-btn-alt>
                    <v-btn>F2</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper class="text-center">
                    <c-btn-alt>M3</c-btn-alt>
                    <v-btn>F3</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper class="text-center">
                    <c-btn-alt>M4</c-btn-alt>
                    <v-btn>F4</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper class="text-center">
                    <c-btn-alt>M5</c-btn-alt>
                    <v-btn>F5</v-btn>
                </c-btn-wrapper>
            </div>
        </header>
        <main class="mt-4">
            <div class="buttons-grid">
                <c-btn-wrapper>
                    <v-btn color="orange darken-2">2nd</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>QUIT</c-btn-alt>
                    <v-btn>EXIT</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>MODE</c-btn-alt>
                    <v-btn>MORE</v-btn>
                </c-btn-wrapper>
                <div class="cursors">
                    <v-btn class="cursor-left fill-height">
                        <v-icon>mdi-menu-left</v-icon>
                    </v-btn>
                    <v-btn class="cursor-up">
                        <v-icon>mdi-menu-up</v-icon>
                    </v-btn>
                    <v-btn class="cursor-down">
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                    <v-btn class="cursor-right">
                        <v-icon>mdi-menu-right</v-icon>
                    </v-btn>
                </div>

                <c-btn-wrapper>
                    <c-btn-alt>alpha</c-btn-alt>
                    <v-btn color="blue lighten-1">ALPHA</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>LINK</c-btn-alt>
                    <c-btn-symbol>x</c-btn-symbol>
                    <v-btn>x-VAR</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>INS</c-btn-alt>
                    <v-btn>DEL</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>SOLVER</c-btn-alt>
                    <v-btn>GRAPH</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>SIMULT</c-btn-alt>
                    <v-btn>TABLE</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>POLY</c-btn-alt>
                    <v-btn>PRGM</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>POLY</c-btn-alt>
                    <v-btn>CUSTOM</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CATLG-VARS</c-btn-alt>
                    <v-btn>CLEAR</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>10<sup>x</sup></c-btn-alt>
                    <c-btn-symbol>A</c-btn-symbol>
                    <v-btn>LOG</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>SIN<sup>-1</sup></c-btn-alt>
                    <c-btn-symbol>B</c-btn-symbol>
                    <v-btn>SIN</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>COS<sup>-1</sup></c-btn-alt>
                    <c-btn-symbol>C</c-btn-symbol>
                    <v-btn>COS</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>TAN<sup>-1</sup></c-btn-alt>
                    <c-btn-symbol>D</c-btn-symbol>
                    <v-btn>TAN</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>π</c-btn-alt>
                    <c-btn-symbol>E</c-btn-symbol>
                    <v-btn>^</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>e<sup>x</sup></c-btn-alt>
                    <c-btn-symbol>F</c-btn-symbol>
                    <v-btn>LN</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>x<sup>-1</sup></c-btn-alt>
                    <c-btn-symbol>G</c-btn-symbol>
                    <v-btn>EE</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>[</c-btn-alt>
                    <c-btn-symbol>H</c-btn-symbol>
                    <v-btn>(</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>]</c-btn-alt>
                    <c-btn-symbol>I</c-btn-symbol>
                    <v-btn>)</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CALC</c-btn-alt>
                    <c-btn-symbol>J</c-btn-symbol>
                    <v-btn>÷</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>√</c-btn-alt>
                    <c-btn-symbol>K</c-btn-symbol>
                    <v-btn>x<sup>2</sup></v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>MATRX</c-btn-alt>
                    <c-btn-symbol>L</c-btn-symbol>
                    <v-btn color="grey darken-2">7</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>VECTR</c-btn-alt>
                    <c-btn-symbol>M</c-btn-symbol>
                    <v-btn color="grey darken-2">8</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CPLX</c-btn-alt>
                    <c-btn-symbol>N</c-btn-symbol>
                    <v-btn color="grey darken-2">9</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>MATH</c-btn-alt>
                    <c-btn-symbol>O</c-btn-symbol>
                    <v-btn>X</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>∠</c-btn-alt>
                    <c-btn-symbol>P</c-btn-symbol>
                    <v-btn>,</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CONS</c-btn-alt>
                    <c-btn-symbol>Q</c-btn-symbol>
                    <v-btn color="grey darken-2">4</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CONV</c-btn-alt>
                    <c-btn-symbol>R</c-btn-symbol>
                    <v-btn color="grey darken-2">5</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>STRNG</c-btn-alt>
                    <c-btn-symbol>S</c-btn-symbol>
                    <v-btn color="grey darken-2">6</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>LIST</c-btn-alt>
                    <c-btn-symbol>T</c-btn-symbol>
                    <v-btn>-</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>RCL</c-btn-alt>
                    <c-btn-symbol>=</c-btn-symbol>
                    <v-btn>
                        STO
                        <v-icon right>mdi-arrow-right-bold</v-icon>
                    </v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>BASE</c-btn-alt>
                    <c-btn-symbol>U</c-btn-symbol>
                    <v-btn color="grey darken-2">1</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>TEST</c-btn-alt>
                    <c-btn-symbol>V</c-btn-symbol>
                    <v-btn color="grey darken-2">2</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>MEM</c-btn-alt>
                    <c-btn-symbol>W</c-btn-symbol>
                    <v-btn color="grey darken-2">3</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>STAT</c-btn-alt>
                    <c-btn-symbol>X</c-btn-symbol>
                    <v-btn>+</v-btn>
                </c-btn-wrapper>

                <c-btn-wrapper>
                    <c-btn-alt>OFF</c-btn-alt>
                    <v-btn>ON</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>CHAR</c-btn-alt>
                    <c-btn-symbol>Y</c-btn-symbol>
                    <v-btn color="grey darken-2">0</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>:</c-btn-alt>
                    <c-btn-symbol>Z</c-btn-symbol>
                    <v-btn color="grey darken-2">•</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>ANS</c-btn-alt>
                    <c-btn-symbol>_</c-btn-symbol>
                    <v-btn color="grey darken-2">(-)</v-btn>
                </c-btn-wrapper>
                <c-btn-wrapper>
                    <c-btn-alt>ENTRY</c-btn-alt>
                    <v-btn>ENTER</v-btn>
                </c-btn-wrapper>
            </div>
        </main>
    </v-app>
</template>

<script>
export default {

}
</script>