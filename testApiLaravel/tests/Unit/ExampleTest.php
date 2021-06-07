<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        //$this->assertTrue(true);

        //On initialise les données 
        $data = [10, 20, 30];

        //On agit sur ces données
        $result = array_sum($data);

        //On teste le résultat
        $this->assertEquals(60, $result);
    }
}
