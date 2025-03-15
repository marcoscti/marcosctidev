import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);
const { create } = browserSync;

// Compilar Sass e minifica
gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css')) // Apenas compila
    .pipe(browserSync.stream());
});

// Copiar JS e minifica
gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js')); // Apenas copia
});

// Compactar imagens
gulp.task('compress-images', function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Iniciar servidor e monitorar arquivos
gulp.task('serve', function () {
  const bs = create();
  bs.init({
    server: { baseDir: './' },
  });

  gulp.watch('./src/css/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
  gulp.watch(['./**/*.html', './dist/js/**/*.js']).on('change', bs.reload);
});

// **Tarefa padrão
gulp.task('default', gulp.series('sass', 'js', 'compress-images', 'serve'));