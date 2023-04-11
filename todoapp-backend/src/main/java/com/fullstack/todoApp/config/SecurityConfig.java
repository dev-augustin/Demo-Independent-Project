//package com.fullstack.todoApp.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.savedrequest.NullRequestCache;
//import org.springframework.security.web.savedrequest.RequestCache;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//import javax.sql.DataSource;
//
//@EnableWebSecurity
//@Configuration
//
//public class SecurityConfig {
//
//    @Autowired
//    private DataSource dataSource;
//
////    @Autowired(required = true)
////    private NullRequestCache nullRequestCache;
//
//
//
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return new CustomUserDetailsService();
//    }
//
//    @Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//        authenticationProvider.setUserDetailsService(userDetailsService());
//        authenticationProvider.setPasswordEncoder(passwordEncoder());
//
//        return authenticationProvider;
//    }
//
////    @Autowired
////    private LdapAuthenticationProvider authProvider;
//
//    //    @Bean
////    public AuthenticationManagerBuilder auth() {
////        return auth.authenticationProvider(authenticationProvider());
////    }
////    @Bean
////    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
////        return authenticationConfiguration.getAuthenticationManager();
////    }
//
//
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//    //
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        http
////                .cors().and()
////                .csrf().disable()
////                .authorizeHttpRequests()
////                .requestMatchers(HttpMethod.GET, "/allTasks").permitAll()
////                .anyRequest().permitAll()
////
////                .and().formLogin()
////                .defaultSuccessUrl("/allTasks")
////        .permitAll()
////                .and().logout().permitAll()
////                .and()
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////        return http.build();
////
////    }
////    @Override
////    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////        auth.authenticationProvider(authenticationProvider());
////    }
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        RequestCache nullRequestCache = new NullRequestCache();
//
//        http
//                .cors().and()
//                .csrf().disable()
//                .authorizeHttpRequests()
//                .requestMatchers(HttpMethod.DELETE, "/delete-User/*").authenticated()
////                .requestMatchers(HttpMethod.POST).authenticated()
//                .requestMatchers(HttpMethod.POST).permitAll()
//                .requestMatchers(HttpMethod.GET).permitAll()
//                .requestMatchers(HttpMethod.PUT).permitAll()
//                .anyRequest().authenticated()
//                .and()
////                .httpBasic()
//                .formLogin()
//////                .loginPage("http://localhost:3000/todoHome")
//////                .defaultSuccessUrl("http://localhost:3000/home")
//                .permitAll()
//                .and()
////                .logout()
//////                        .logoutSuccessUrl("http://localhost:3000/todoHome")
////                .permitAll();
////                .formLogin(form -> form
////                        .loginPage("/login")
////                        .permitAll()
////                )
////                .logout()
////                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////                .logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("http://localhost:3000/login")
////                .and()
////                .logout()
////                .deleteCookies("JSESSIONID")
////                .invalidateHttpSession(true)
////                .and()
//
////                .logout(logout -> logout
////                        .logoutUrl("/logout")
////                        .logoutSuccessUrl("http://localhost:3000/todoHome")
////                )
//
//////                .logoutUrl("http://localhost:3000/todoHome")
////                .and()
//
////                .logout().logoutSuccessUrl("http://localhost:3000/todoHome").permitAll()
////                    .exceptionHandling().accessDeniedPage("/access-denied")
////                .logout()
////                .invalidateHttpSession(true)
////                .clearAuthentication(true)
////                .logoutSuccessUrl("http://localhost:3000/todoHome").permitAll()
////                .and()
////                .and()
////                .requestCache((cache) -> cache
////                .requestCache(nullRequestCache));
//        return http.build();
//    }
///////////////////////////////
////    }
////    @Bean
////    public BCryptPasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
//
////    @Bean
////    public UserDetailsService userDetailsService() {
////        UserDetails admin = User.builder()
////                .username("admin")
////                .password(passwordEncoder().encode("pass"))
////                .roles("ADMIN")
////                .build();
////
////        UserDetails user = User.builder()
////                .username("user")
////                .password(passwordEncoder().encode("user"))
////                .roles("USER")
////                .build();
////        return new InMemoryUserDetailsManager(admin, user);
////    }
////
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        http
////                .cors().and()
////                .csrf().disable()
////                .authorizeHttpRequests()
////                .requestMatchers(HttpMethod.POST, "/addUser").permitAll()
////                .requestMatchers(HttpMethod.POST, "/addTask").permitAll()
//////                .requestMatchers(HttpMethod.GET, "/allTasks", "/inCompleteTasks", "/completedTasks").permitAll()
////                .requestMatchers(HttpMethod.DELETE, "/deleteTask/*").permitAll()
////                .requestMatchers(HttpMethod.PUT, "/updateTask/*").permitAll()
////                .anyRequest().authenticated()
////                .and()
////                .httpBasic()
////                .and()
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////        return http.build();
////
////    }
////////////////////
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        http
////                .cors().and()
////                .csrf().disable()
////                .authorizeHttpRequests()
////                .requestMatchers(HttpMethod.POST, "/addUser").permitAll()
////                .requestMatchers(HttpMethod.POST, "/addTask").permitAll()
////                .requestMatchers(HttpMethod.GET, "/allTasks", "/inCompleteTasks", "/completedTasks").permitAll()
////                .requestMatchers(HttpMethod.DELETE, "/deleteTask/*").permitAll()
////                .requestMatchers(HttpMethod.PUT, "/updateTask/*").permitAll()
////                .requestMatchers(
////                        HttpMethod.GET,
////                        "/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
////                .permitAll()
////                .anyRequest().authenticated()
////                .and()
////                .formLogin().loginPage("/index.html")
////                .loginProcessingUrl("/perform_login")
////                .defaultSuccessUrl("/", true)
////                .failureUrl("/index.html?error=true")
////                .and()
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////        return http.build();
////
////    }
//
//
//}
