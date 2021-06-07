<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class MyClasseTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function somTab()
    {
        $data = [10, 20, 30];
        $result = array_sum($data);
        $this->assertEquals(600, $result);
    }
}
