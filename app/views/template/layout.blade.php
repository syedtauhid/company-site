<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm5445.html?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TM96GM');
    </script>
    <!-- End Google Tag Manager -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="People Solutions">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') | Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--Add css lib-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    @include('template._partials.style')
</head>
<body>
<!--Header: Begin-->
@include('template._partials.navbar')

<!--Main index : Begin-->
<main class="main">
   @yield('content')
</main>
<!--Footer : Begin-->
@include('template._partials.footer')
<div id="sitebodyoverlay"></div>

<!--Add js lib-->
@include('template._partials.script')

</body>
</html>
